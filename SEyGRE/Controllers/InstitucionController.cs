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
    public class InstitucionController : ControllerBase
    {

        private seygreContext context;

        public InstitucionController(seygreContext _context)
        {
            context = _context;

        }


        [HttpPost("[action]")]
        public void AgregarNoticia([FromBody] Noticias r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Noticias.Add(r);

            context.SaveChanges();

        }


        [HttpGet("[action]")]
        public List<Noticias> ObtenerNoticias()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Noticias select e).ToList();

            return list;

        }



        [HttpPost("[action]")]
        public void ModificarNoticia([FromBody] Noticias r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Noticias.Find(r.Id);

            if (r.Nombre != null)
            {
                found.Nombre = r.Nombre;
            }
            if (r.ImagenUrl != null)
            {
                found.ImagenUrl = r.ImagenUrl;
            }
            if (r.Descripccion != null)
            {

                found.Descripccion = r.Descripccion;
            }
            if (r.NoticiaUrl != null)
            {

                found.NoticiaUrl = r.NoticiaUrl;
            }

            context.Update(found);

            context.SaveChanges();

        }


        [HttpPost("[action]")]
        public void EliminarNoticia([FromBody] int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Noticias.Find(id);

            context.Noticias.Remove(found);

            context.SaveChanges();

        }


        /*
        [HttpGet("[action]")]
        public List<Centrosacopio> ObtenerCentros()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.IdEstatus.Equals(1)
                        select new Centrosacopio {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Imagen = e.Imagen

                        }).ToList();

            return list;

        }
        */

        //OBTENER STATS
        [HttpGet("[action]")]
        public async Task<float[]> ObtenerInformacionYear(int id) /*obteneidno resultado por nombre exacto de los centros */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            int[] year = { 2019, 2020, 2021, 2022, 2023, 2024, 2025 };
            float[] datos = new float[7];
            int i = 0;


            var result = await Task.Run(() =>
            {
                return ((from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e));
            });


            foreach (var y in year)
            {
                foreach (var r in result)
                {

                    if (r.Fecha.Value.Year.Equals(y))
                    {
                        datos[i] += r.Peso;
                    }

                }

                i += 1;

            }


            return datos;

        }



        //OBTENER PIE
        [HttpGet("[action]")]
        public async Task<int[]> ObtenerInformacionClasificacion(int id)
        {

            int[] clasifi = { 1, 2, 3 };
            int[] datos = new int[3];
            int i = 0;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            foreach (var c in clasifi)
            {

                datos[i] = await Task.Run(() =>
                {
                    return ((from e in context.Residuos where e.IdClasificacion.Equals(c) && e.IdCentroAcopio.Equals(id) select e).Count());
                });

                i += 1;

            }

            return datos;

        }



        //OBTENER PIE
        [HttpGet("[action]")]
        public int ObtenerInformacionEventos(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var totalEventos = (from e in context.Eventos where e.IdCentroAcopio.Equals(id) select e).Count();

            return totalEventos;

        }



        //OBTENER PIE
        [HttpGet("[action]")]
        public float ObtenerInformacionElementos(int id)
        {

            float totalElementos = 0.0f;
            float totalPesoResiduos = 0.0f;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var elementos = (from e in context.Elementos select e);

            foreach(var e in elementos)
            {
                totalElementos += e.Cantidad;
            }

            var residuos = (from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e);


            foreach (var r in residuos)
            {

                totalPesoResiduos += r.Peso;

            }


            return totalElementos * totalPesoResiduos;

        }



        [HttpGet("[action]")]
        public int ObtenerTotalCentrosActivos() /* habilitados o deshabilitados centros en sistema */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var totalACentros = (from e in context.Centrosacopio where e.IdEstatus.Equals(1) && e.Id != 1 select e).ToList().Count();

            return totalACentros;

        }


        [HttpGet("[action]")]
        public int ObtenerTotalCentrosDesactivados() /* habilitados o deshabilitados centros en sistema */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var totalDCentros = (from e in context.Centrosacopio where e.IdEstatus.Equals(2) && e.Id != 1 select e).ToList().Count();

            return totalDCentros;

        }



        [HttpGet("[action]")]
        public List<RelacionCentrosAcopioEstatus> ObtenerCentrosHabDes() /* habilitados o deshabilitados centros en sistema */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where (e.IdEstatus.Equals(1) || e.IdEstatus.Equals(2)) && e.Id != 1
                        select new RelacionCentrosAcopioEstatus
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Usuario = e.Usuario,
                            Password = e.Password,
                            Imagen = e.Imagen,
                            Documento = e.Documento,
                            Titulo = l.Titulo,
                            Correo = e.Correo

                        }).ToList();

            return list;

        }



        [HttpPost("[action]")]
        public void HabilitarDeshabilitar([FromBody] Centrosacopio r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(r.Id);

            if(r.IdEstatus == 1)
            {
                found.IdEstatus = 1;
            } else
            {
                found.IdEstatus = 2;
            }

            context.Update(found);

            context.SaveChanges();

        }



    }

}

    
