using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Personal
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public int? Edad { get; set; }
        public string Direccion { get; set; }
        public int? IdCargo { get; set; }
        public int? IdCentro { get; set; }
    }
}
