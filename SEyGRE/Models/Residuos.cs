using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Residuos
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public float? Peso { get; set; }
        public int? IdClasificacion { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
