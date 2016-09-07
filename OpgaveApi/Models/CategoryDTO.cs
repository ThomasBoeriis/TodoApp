using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OpgaveApi.Models
{
    public class CategoryDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<TaskDTO> Tasks {get; set;}
    }
}