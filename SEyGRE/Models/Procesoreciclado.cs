using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Procesoreciclado
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int? Idetapa { get; set; }
        public string Porcentaje { get; set; }
        public string Fecha { get; set; }
    }
}
