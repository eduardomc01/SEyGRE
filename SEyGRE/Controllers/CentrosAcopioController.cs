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
using System.Web;

namespace SEyGRE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CentrosAcopioController : ControllerBase
    {
        private seygreContext context;

        private readonly IHostingEnvironment _env;

        public CentrosAcopioController(IHostingEnvironment env, seygreContext _context)
        {
            context = _context;
            _env = env;
        }

        [HttpPost("[action]")]
        public int InsertarCentros([FromBody] Centrosacopio r)
        {


            string origen = "seygre.veracruz@gmail.com";
            string destino = "seygre.veracruz@gmail.com";
            string contraseña = "veracruzrrr";


            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var register = (from e in context.Centrosacopio select e).ToList();

            context.Centrosacopio.Add(r);

            context.SaveChanges();


            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {

                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "Nuevo Registro de C.A.";
                m.IsBodyHtml = true;
                m.Body = Formmato1Html(r);
               
                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception )
            {
                
                throw;
            }
            

            return 1;
        }


        public string Formmato1Html( Centrosacopio r)
        {


            return (@"<html>" +
                    "<body>" +
                    "<div style='" +
                    "padding-bottom: 50px;" +
                    "text-align: center;" +
                    "box-shadow: 5px 5px 5px 5px rgba(125,125,125,.8);" +
                    "border-radius: 10px;'>" +

                    "<h3 style='" +
                    "padding:5 %;'>" +
                    "Mensaje de aviso por centro de acopio en espera de nuestra respuesta  </h3>" +

                    "<table style='" +
                    "padding: 0 5% 0 5%; width:100% '>" +
                    "<thead> <tr>  <th colspan='2'>" +
                    "Información del 'posible' centro </th></tr></thead>" +

                    " <tbody>  " +
                    "  <tr> <th> Usuario </th> " +
                    "  <td> " + r.Usuario + " </td> " +
                    "  <tr> <th> Nombre del centro </th> " +
                    " <td> " + r.Nombre + " </td> " +
                    " <tr> <th> Correo electrónico </th> " +
                    " <td> " + r.Correo + " </td> " +
                    " </tr> " +
                    "</tbody> " +
                    "<tfooter> " +
                    "<tr > " +
                    " <td colspan='2'>  </td> " +
                    "	</tr> " +
                    "</tfooter> " +

                    " </table> " +

                    " </div> " +
                    " </body>" +
                    "</html>");


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
                            Documento = e.Documento,
                            Titulo = l.Titulo,
                            Correo = e.Correo

                        }).ToList();

            return list;

        }


        [HttpGet("[action]")]
        public List<Centrosacopio> ObtenerCentro(int id) /* obtener centro */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.Id == id
                        select new Centrosacopio {

                            Id= e.Id,
                            Nombre= e.Nombre,
                            Latitud = e.Latitud,
                            Longitud = e.Longitud

                        }).ToList();

            return list;

        }



        [HttpGet("[action]")]
        public IQueryable<Centrosacopio> ObtenerPerfil(int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.Id == id
                        select new Centrosacopio
                        {
                            Id = e.Id,
                            Nombre = e.Nombre,
                            Password = e.Password,
                            Imagen = e.Imagen
                        });

            return list;

        }


        [HttpGet("[action]")]
        public List<Centrosacopio> ObtenerUbicacionCentros() /*obtener ubicacion de los centros */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio where e.IdEstatus.Equals(1)
                        select new Centrosacopio
                        {
                            Id = e.Id,
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

            var list = (from e in context.Centrosacopio where e.IdEstatus.Equals(1) select e).ToList();

            return list;

        }


        [HttpPost("[action]")]
        public List<RelacionCentrosAcopioEstatus> ObtenerUsuario([FromBody] RelacionCentrosAcopioEstatus r) /*login*/
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var list = (from e in context.Centrosacopio
                        join l in context.Estatus
                        on e.IdEstatus equals l.Id
                        join f in context.Tipousuario
                        on e.IdTipoUsuario equals f.Id
                        where e.Usuario == r.Usuario && e.Password == r.Password && e.IdEstatus.Equals(1) /*|| f.Nombre == r.Usuario*//* checar el super usuario */ 
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
            
            string origen = "seygre.veracruz@gmail.com";
            string destino;
            string contraseña = "veracruzrrr";
            
            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            found.IdEstatus = 1;

            context.Centrosacopio.Update(found);

            destino = found.Correo;

            context.SaveChanges();

            
            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {
                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "SEyGRE-Aceptado";
                m.IsBodyHtml = true;
                m.Body = Formmato2Html(found);

                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception  )
            {

                throw;
            }
            

            return 1;

        }



        public string Formmato2Html(Centrosacopio r)
        {


            return (@"<html>" +
                    "<body>" +
                    "<div style='" +
                    "padding-bottom: 50px;" +
                    "text-align: center;" +
                    "box-shadow: 5px 5px 5px 5px rgba(125,125,125,.8);" +
                    "border-radius: 10px;'>" +

                    "<h3 style='" +
                    "padding:5 %;'>" +
                    "Respuesta al centro de acopio  </h3>" +

                    "<table style='" +
                    "padding: 0 5% 0 5%; width:100% '>" +
                    "<thead> <tr>  <th colspan='2'>" +
                    "Información breve del centro  aceptado </th></tr></thead>" +

                    " <tbody>  " +
                    "  <tr> <th> Usuario </th> " +
                    "  <td> " + r.Usuario + " </td> " +
                    "  <tr> <th> Nombre del centro </th> " +
                    " <td> " + r.Nombre + " </td> " +
                    "  <tr> <th> Documentación </th> " +
                    " <td> Verificada y  <p style='color: green;'> aceptada </p> </td> " +
                    " </tr> " +
                    "</tbody> " +
                    "<tfooter>" +
                    "<tr > " +
                    " <td colspan='2'> " +
                    "<br/>" +
                    "¡Felicidades!, ya forma parte de este sistema y damos por echo que sera una gran aventura tenerlos aqui con las " +
                    "personas que quieren ver un mundo más limpio de residuos electronicos. <br/><br/> Saludos cordiales del equipo SEyGRE' " +
                    "</td> " +
                    "	</tr> " +
                    "</tfooter> " +

                    " </table> " +

                    " </div> " +
                    " </body>" +
                    "</html>");


        }


        [HttpPost("[action]")]
        public int EliminarPeticionCentro([FromBody] int id)
        {
         
            string origen = "seygre.veracruz@gmail.com";
            string destino;
            string contraseña = "veracruzrrr";
        

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var found = context.Centrosacopio.Find(id);

            destino = found.Correo;

            context.Centrosacopio.Remove(found);

            context.SaveChanges();

            
            MailMessage m = new MailMessage();
            SmtpClient s = new SmtpClient();

            try
            {
                m.From = new MailAddress(origen);
                m.To.Add(new MailAddress(destino));
                m.Subject = "SEyGRE-Rechazado";
                m.IsBodyHtml = true;
                m.Body = Formato3Html(found);

                s.Host = "smtp.gmail.com";
                s.Port = 587;
                s.Credentials = new NetworkCredential(origen, contraseña);
                s.EnableSsl = true;
                s.Send(m);

            }
            catch (Exception )
            {

                throw;
            }
            

            return 1;

        }


        public string Formato3Html(Centrosacopio r)
        {


            return (@"<html>" +
                    "<body>" +
                    "<div style='" +
                    "padding-bottom: 50px;" +
                    "text-align: center;" +
                    "box-shadow: 5px 5px 5px 5px rgba(125,125,125,.8);" +
                    "border-radius: 10px;'>" +

                    "<h3 style='" +
                    "padding:5 %;'>" +
                    "Respuesta al centro de acopio  </h3>" +

                    "<table style='" +
                    "padding: 0 5% 0 5%; width:100% '>" +
                    "<thead> <tr>  <th colspan='2'>" +
                    "Información breve del centro  aceptado </th></tr></thead>" +

                    " <tbody>  " +
                    "  <tr> <th> Usuario </th> " +
                    "  <td> " + r.Usuario + " </td> " +
                    "  <tr> <th> Nombre del centro </th> " +
                    " <td> " + r.Nombre + " </td> " +
                    "  <tr> <th> Documentación </th> " +
                    " <td> Verificada y <p style='color: red;'> rechazada </p> </td> " +
                    " </tr> " +
                    "</tbody> " +
                    "<tfooter style='" +
                    "padding-top: 50px;'>" +
                    "<tr > " +
                    " <td colspan='2'> " +
                    "<br/>" +
                    "Lo sentimos, no cumple con los requisitos para darse de alta en el sistema, vuelva cuando los documentos oficiales " +
                    "esten a la mano o la información proporcionada este en orden antes las autoridades competentes. <br/><br/> Saludos cordiales del equipo SEyGRE" +
                    "</td> " +
                    "	</tr> " +
                    "</tfooter> " +
                    " </table> " +
                    " </div> " +
                    " </body>" +
                    "</html>");


        }




        [HttpPost("[action]")]
        public async Task<IActionResult> GuardarDocumento(IFormFile document) /* HACIENDO PRUEBAS */
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            string path = _env.ContentRootPath + Path.DirectorySeparatorChar + "ClientApp"
                                               + Path.DirectorySeparatorChar + "src"
                                               + Path.DirectorySeparatorChar + "assets"
                                               + Path.DirectorySeparatorChar + "doc";


            
            if (document.Length > 0)
            {
                using (var stream = new FileStream(path + Path.DirectorySeparatorChar + document.FileName, FileMode.Create))
                {
                    await document.CopyToAsync(stream);
                }
            }
            

            var found = (from e in context.Centrosacopio where e.Documento.Equals(document.FileName) select e).LastOrDefault();
            
            found.Documento = document.FileName;

            context.Centrosacopio.Update(found);

            context.SaveChanges();

            return Ok();

        }


        [HttpPost("[action]")]
        public async Task<IActionResult> GuardarImagenes(IFormFile file, int id)
        {

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            string path = _env.ContentRootPath + Path.DirectorySeparatorChar + "ClientApp"
                                               + Path.DirectorySeparatorChar + "src"
                                               + Path.DirectorySeparatorChar + "assets"
                                               + Path.DirectorySeparatorChar + "profile";

            

            if (!(Directory.Exists(path + Path.DirectorySeparatorChar + file.FileName)))
            {
                Directory.CreateDirectory(Path.Combine(path, id.ToString())); /* se crea carpeta por primera vez para ser guardada ahi la imagen */
            }

            
            if (file.Length > 0)
            {
                using (var stream = new FileStream(path + Path.DirectorySeparatorChar + id.ToString() + Path.DirectorySeparatorChar + file.FileName, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }
            

            
            var found = context.Centrosacopio.Find(id);

            found.Imagen = file.FileName;

            context.Centrosacopio.Update(found);

            context.SaveChanges();

            return Ok();


        }



        [HttpGet("[action]")]
        public float [] ObtenerInformacionR(int id)
        {

            float totalElementos = 0.0f;
            float totalPesoResiduos = 0.0f;

            context = HttpContext.RequestServices.GetService(typeof(seygreContext)) as seygreContext;

            var elementos = (from e in context.Elementos select e);

            foreach (var e in elementos)
            {
                totalElementos += (e.Cantidad / 1000.0f); /*convirtiendo gramos a Kg. 1g. = .001kg */
            }

            var residuos = (from e in context.Residuos where e.IdCentroAcopio.Equals(id) select e);


            foreach (var r in residuos)
            {

                totalPesoResiduos += r.Peso;

            }


            return new float[] { totalPesoResiduos, totalElementos * totalPesoResiduos };

        }


    }

}

//   _env.WebRootPath. -> "C:\Users\eduar\SEyGRE\SEyGRE\wwwroot"




