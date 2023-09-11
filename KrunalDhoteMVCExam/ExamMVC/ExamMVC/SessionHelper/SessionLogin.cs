
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace ExamMVC.SessionHelper
{
    public class SessionLogin
    {
        public static string Name
        {
            get
            {
                return HttpContext.Current.Session["Name"] == null ? "" : (string)HttpContext.Current.Session["Name"];
            }
            set
            {
                
                HttpContext.Current.Session["Name"] = value;
            }
        }
    }
}