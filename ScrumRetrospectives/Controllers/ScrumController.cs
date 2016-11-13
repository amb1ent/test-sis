using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ScrumRetrospectives.Models;

namespace ScrumRetrospectives.Controllers
{
    public class ScrumController : ApiController
    {
        // GET: api/Scrum
        public IEnumerable<ScrumApiModels.Retrospective> Get()
        {
            return ScrumApiModels.DB.GetRetrospectives();
        }

        // GET: api/Scrum/5
        public ScrumApiModels.Retrospective Get(string id)
        {
            return ScrumApiModels.DB.GetRetrospective(id);
        }

        // POST: api/Scrum
        public void Post([FromBody]ScrumApiModels.Retrospective value)
        {
            throw new NotImplementedException();
        }

        // PUT: api/Scrum/5
        public void Put(int id, [FromBody]ScrumApiModels.Retrospective value)
        {
            throw new NotImplementedException();
        }

        // DELETE: api/Scrum/5
        public void Delete(string id)
        {
            ScrumApiModels.DB.DeleteRetrospective(id);
        }
    }
}
