using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeService.EntityModels;

namespace EmployeeService.Controllers
{
    [Authorize]
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (EmployeeDbContext db = new EmployeeDbContext())
            {
                List<Employee> listOfEmployees = db.Employees.ToList();

                return listOfEmployees;
            }
        }
    }
}
