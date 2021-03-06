﻿using System;
using Scrapbook.Domain.Enums.Editor;
using Scrapbook.Domain.Interfaces.User;
using Scrapbook.Domain.Shared;

namespace Scrapbook.Domain.Entities.Editor.Document
{
    public class EditorDocument: Entity, IMustHaveUser
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public EditorDocumentAllowedAccess? DocumentAccess { get; set; }
        public string Image { get; set; }
        public Guid UserId { get; set; }
    }
}