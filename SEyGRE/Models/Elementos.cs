using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Elementos
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public float Cantidad { get; set; }
        public float Porcentaje { get; set; }
        public string Descripccion { get; set; }
    }
}
