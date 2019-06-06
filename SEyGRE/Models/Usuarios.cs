using System;
using System.Collections.Generic;

namespace SEyGRE.Models
{
    public partial class Usuarios
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Contraseña { get; set; }
        public int? IdTipoUsuario { get; set; }
    }
}
