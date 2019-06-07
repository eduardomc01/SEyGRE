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
    public class EventosController : ControllerBase
    {

        private seygreContext context;

        public EventosController()
        {
            context = new seygreContext();
        }


        [HttpPost("[action]")]
        public void InsertarEventos([FromBody] Eventos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Eventos.Add(r);

            context.SaveChanges();

        }



    }
}
