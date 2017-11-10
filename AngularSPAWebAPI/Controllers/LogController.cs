using AngularSPAWebAPI.Models;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularSPAWebAPI.Controllers
{
    public class LogController : Controller
    {
        // POST api/<controller>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]LogEntry value)
        {
            // TODO: Write code to store logging
            // data in a database table

            return
                 Ok(true);
        }
    }
}
