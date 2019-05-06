using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Centrosacopio
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Imagen { get; set; }
        public double? Latitud { get; set; }
        public double? Longitud { get; set; }
        public int? IdEstatus { get; set; }
    }
}
