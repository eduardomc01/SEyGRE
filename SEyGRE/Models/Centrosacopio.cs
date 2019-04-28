using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Centrosacopio
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public double? Latitud { get; set; }
        public double? Longitud { get; set; }
    }
}
