using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ExamMVC.ActionFilter
{
    public class MyActionFilter:ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if(filterContext.HttpContext.Session == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                     { "controller", "Home" },
                     { "action", "Login" }
                   });
            }

            //if (filterContext.Result == null || filterContext.Result is HttpUnauthorizedResult)
            //{
            //    //Redirecting the user to the Login View of Account Controller  
            //    filterContext.Result = new RedirectToRouteResult(
            //    new RouteValueDictionary
            //    {
            //         { "controller", "Home" },
            //         { "action", "Login" }
            //    });
            //}
        }
    }
}