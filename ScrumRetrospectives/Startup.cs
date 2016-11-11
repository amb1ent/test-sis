using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ScrumRetrospectives.Startup))]
namespace ScrumRetrospectives
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
