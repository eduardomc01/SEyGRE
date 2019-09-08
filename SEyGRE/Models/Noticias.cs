using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Noticias
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ImagenUrl { get; set; }
        public string Descripccion { get; set; }
        public string NoticiaUrl { get; set; }
    }
}
