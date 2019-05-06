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
    public class CentrosAcopioController : ControllerBase
    {

        private seygreContext context;

        public CentrosAcopioController()
        {
            context = new seygreContext();
        }

        [HttpPost("[action]")]
        public void InsertarCentros([FromBody] Centrosacopio r){

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Centrosacopio.Add(r);

            context.SaveChanges();

        }

        [HttpGet("[action]")]
        public List<Prueba> ObtenerCentrosPendientes()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where e.IdEstatus == 3
                        select new Prueba {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Usuario = e.Usuario,
                            Password = e.Password,
                            Imagen = e.Imagen,
                            Titulo = l.Titulo

                        }).ToList();
            
            return list;

        }



        [HttpPost("[action]")]
        public int AceptarPeticionCentro([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            found.IdEstatus = 1;

            context.Update(found);

            context.SaveChanges();

            return 4;

        }


        [HttpPost("[action]")]
        public int EliminarPeticionCentro([FromBody] int id){

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            context.Centrosacopio.Remove(found);

            context.SaveChanges();

            return 8;

        }

    }




}



public partial class Prueba
{

    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Usuario { get; set; }
    public string Password { get; set; }
    public string Imagen { get; set; }
    public string Titulo { get; set; }

}

/* clase que me permite especificar lo que requiero de una consulta o insercion en
 * el controller 
  */


