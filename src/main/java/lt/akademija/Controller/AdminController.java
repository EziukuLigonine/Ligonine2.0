package lt.akademija.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.Admin;
import lt.akademija.Model.CreateAdminCmd;
import lt.akademija.Model.User;
import lt.akademija.Service.AdminService;

@RestController
@Api(value = "Admin")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	
	@GetMapping(value = "/admins")
	@ApiOperation(value = "Get admin list", notes = "Returns list of all admins")
	public List<Admin> getAdmins(@ApiParam(value = "Search admin")
									@RequestParam(value = "search", required = false) String search ){
		return adminService.getAdmins(search);
	}
	
	@GetMapping(value = "/admins/{id}")
	@ApiOperation(value = "Get admin", notes = "Returns a single admin")
	public User getAdmin(@PathVariable String id) {
		return adminService.getAdmin(id);
	}
	
	@PostMapping(value = "admin/admins/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create admins", notes = "Creates admin")
	public void createAdmin(@RequestBody CreateAdminCmd cmd) {
		adminService.createAdmin(cmd);
	}
	
	@PutMapping(value = "/admins/{id}")
	@ApiOperation(value = "Update admin", notes = "Updates admin details")
	public void updateAdmin(@RequestBody CreateAdminCmd cmd, @PathVariable String id) {
		adminService.updateAdmin(cmd, id);
	}
	
	@DeleteMapping(value = "/admins/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete admin", notes = "Removes admin")
	public void deleteAdmin(@PathVariable String id) {
		adminService.deleteAdmin(id);
	}
}


