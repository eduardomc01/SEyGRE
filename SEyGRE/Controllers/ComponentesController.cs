using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using SEyGRE.Models;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComponentesController : ControllerBase
    {
        private seygreContext context;

        public ComponentesController()
        {
            context = new seygreContext();
        }

        [HttpPost("[action]")]
        public void InsertarComponentes([FromBody] Residuos r){

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Residuos.Add(r);

            context.SaveChanges();

        }
   
    }
}
