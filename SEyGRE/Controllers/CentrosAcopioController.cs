using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Server;
using Microsoft.Extensions.Hosting.Internal;
using SEyGRE.Models;
using Microsoft.AspNetCore.Hosting;
using System.Reflection.Metadata;
using System.Net.Mail;
using System.Net;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CentrosAcopioController : ControllerBase
    {
        private seygreContext context;

        private readonly IHostingEnvironment _env;

        public CentrosAcopioController(IHostingEnvironment env)
        {
            context = new seygreContext();
            _env = env;
        }

        [HttpPost("[action]")]
        public void InsertarCentros([FromBody] Centrosacopio r)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            context.Centrosacopio.Add(r);

            context.SaveChanges();
            /*
            string origen = "seygre.veracruz@gmail.com";
            string destino = "seygre.veracruz@gmail.com";
            string contraseña = "veracruzrrr";
            

            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {
                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "Nuevo Registro de C.A.";
                m.Body = "Se ha ingresado un NUEVO REGISTRO con los siguientes datos: \n" +
                    "\nUsuario:" + r.Usuario +
                    "\nNombre:" + r.Nombre +
                    "\nContraseña: " + r.Password +
                    "\nCorreo:" + r.Correo +
                    "\nLatitud:" + r.Latitud +
                    "\nLongitud:" + r.Longitud +
                    "\nDocumento oficial:" + r.Imagen;
                
                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception e)
            {

                throw;
            }
            */

        }

        [HttpGet("[action]")]
        public List<RelacionCentrosAcopioEstatus> ObtenerCentrosPendientes()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        where e.IdEstatus == 3
                        select new RelacionCentrosAcopioEstatus
                        {

                            Id = e.Id,
                            Nombre = e.Nombre,
                            Usuario = e.Usuario,
                            Password = e.Password,
                            Imagen = e.Imagen,
                            Titulo = l.Titulo,
                            Correo = e.Correo

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
        public List<Centrosacopio> ObtenerUbicacionCentros()
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.IdEstatus.Equals(1)
                        select new Centrosacopio
                        {

                            Nombre = e.Nombre,
                            Latitud = e.Latitud,
                            Longitud = e.Longitud

                        }).ToList();

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
        public List<RelacionCentrosAcopioEstatus> ObtenerUsuario([FromBody] RelacionCentrosAcopioEstatus r)
        {

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
            /*
            string origen = "seygre.veracruz@gmail.com";
            string destino;
            string contraseña = "veracruzrrr";
            */
            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            found.IdEstatus = 1;

            context.Update(found);

            //destino = found.Correo;

            context.SaveChanges();

            /*
            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {
                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "SEyGRE-Aceptado";
                m.Body = "Felicidades, ya forma parte de este sistema y damos por echo que sera una gran aventura tenerlos aqui con las \n" +
                    "personas que quieren ver un mundo mas limpio de residuos electronicos, saludos.";

                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception e )
            {

                throw;
            }
            */

            return 1;

        }


        [HttpPost("[action]")]
        public int EliminarPeticionCentro([FromBody] int id)
        {
            /*
            string origen = "seygre.veracruz@gmail.com";
            string destino;
            string contraseña = "veracruzrrr";
            */

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            //destino = found.Correo;

            context.Centrosacopio.Remove(found);

            context.SaveChanges();
            
            /*
            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {
                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "SEyGRE-Rechazado";
                m.Body = "Lo sentimos, no cumplia los requisitos para darse de alta en el sistema, vuelva cuando los documentos requeridos \n " +
                    "esten a la mano o la información proporcionada sea fidedigna y no haya problema alguno. " +
                    "\n\nQue tenga un buen dia. Saludos";

                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception e)
            {

                throw;
            }
            */

            return 1;

        }

      
        [HttpPost("[action]")]
        public IEnumerable<string> GuardarImagenes([FromBody] DatosImagenesUsuarios r){

            try
            {
                context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

                string pathP = _env.ContentRootPath + Path.DirectorySeparatorChar + "ClientApp" + Path.DirectorySeparatorChar + "src"
                                                    + Path.DirectorySeparatorChar + "assets" + Path.DirectorySeparatorChar + "imagenesPerfiles";

                if (Directory.Exists(pathP + Path.DirectorySeparatorChar + r.Id))
                {


                    

                    return new string[] { "ya existe" };


                }
                else
                {

                    string path = Path.Combine(pathP, r.Id);
                    Directory.CreateDirectory(path);


                    return new string[] { "se agrego bien" };

                }

            }

            catch (Exception)
            {

                throw;
            }
        

        }

        

    }

}

public partial class DatosImagenesUsuarios
{

    public string Id { get; set; }
    public string NombreArchivo { get; set; }
    public Blob File { get; set; }
    
}




