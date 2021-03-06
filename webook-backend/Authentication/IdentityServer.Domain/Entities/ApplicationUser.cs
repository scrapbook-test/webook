using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Domain.Entities
{   
    [Table("User")]
    public class ApplicationUser: IdentityUser<Guid>
    {
        public string Login { set; get; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public bool IsActive { get; set; }
        public string PasswordSalt { get; set; }
        public string UrlImg { get; set; }
        public DateTime CreationTime { get; set; }
        public Guid? CreatorId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public Guid? LastModifierId { get; set; }
        public Guid? DeleterId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
        
    }
}