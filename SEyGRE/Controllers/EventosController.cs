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

        public EventosController(seygreContext _context)
        {
            context = _context;
        }


        [HttpPost("[action]")]
        public void InsertarEvento([FromBody] Eventos r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Eventos.Add(r);

            context.SaveChanges();

        }


        [HttpGet("[action]")]
        public List<Eventos> ObtenerEvento()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Eventos select e).ToList();

            return list;

        }




        [HttpPost("[action]")]
        public int EliminarEvento([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Eventos.Find(id);

            context.Eventos.Remove(found);

            context.SaveChanges();

            return 1;

        }


    }


}
