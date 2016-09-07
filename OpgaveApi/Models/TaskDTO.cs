using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OpgaveApi.Models
{
    public class TaskDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }

        public int CategoryId { get; set; }
        
        public bool Finished { get; set; }

        public Category Category { get; set; }
    }
}