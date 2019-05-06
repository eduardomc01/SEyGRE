using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Estatus
    {
        public Estatus()
        {
            Centrosacopio = new HashSet<Centrosacopio>();
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descripccion { get; set; }

        public ICollection<Centrosacopio> Centrosacopio { get; set; }
    }
}
