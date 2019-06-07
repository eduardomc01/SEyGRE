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
        public List<RelacionCentrosAcopioEstatus> ObtenerCentrosPendientes()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where e.IdEstatus == 3
                        select new RelacionCentrosAcopioEstatus {

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
        public List<Centrosacopio> ObtenerCentro([FromBody] Centrosacopio r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.Id == r.Id select e).ToList();

            return list;

        }

        [HttpGet("[action]")]
        public List<Centrosacopio> ObtenerCentros()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio select e).ToList();

            return list;

        }


        [HttpPost("[action]")]
        public List<RelacionCentrosAcopioEstatus> ObtenerUsuario([FromBody] RelacionCentrosAcopioEstatus r){

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        join f in context.Tipousuario
                        on e.IdTipoUsuario equals f.Id
                        where e.Usuario == r.Usuario && e.Password == r.Password && l.Titulo == "activo"
                        select new RelacionCentrosAcopioEstatus
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            TipoUsuario = f.Nombre

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

            return 1;

        }


        [HttpPost("[action]")]
        public int EliminarPeticionCentro([FromBody] int id){

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            context.Centrosacopio.Remove(found);

            context.SaveChanges();

            return 1;

        }

    }




}




