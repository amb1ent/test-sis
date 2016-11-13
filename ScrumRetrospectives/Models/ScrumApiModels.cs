using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ScrumRetrospectives.Models
{
    public static class ScrumApiModels
    {
        public static class DB
        {
            private static List<Retrospective> list = new List<Retrospective>();
            private static Dictionary<string, Retrospective> dict = new Dictionary<string, Retrospective>();

            static DB()
            {
                foreach (Retrospective r in new Retrospective[]
                {
                    new Retrospective
                    {
                        name = "Retrospective 1",
                        summary = "Post release retrospective",
                        date = "27/07/2016",
                    }
                })
                {
                    list.Add(r);
                    dict.Add(r.name, r);
                }
            }
            public static IEnumerable<Retrospective> GetRetrospectives()
            {
                return list;
            } 
            public static Retrospective GetRetrospective(string id)
            {
                return dict[id];
            }

            public static void DeleteRetrospective(string id)
            {
                list.Remove(dict[id]);
                dict.Remove(id);
            }
        }

        public class Retrospective
        {
            public string name { get; set; }
            public string summary { get; set; }
            public string date { get; set; }
        }
    }
}