package lt.akademija.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.CreatePharmacistCmd;
import lt.akademija.Model.Pharmacist;
import lt.akademija.Model.User;
import lt.akademija.Service.PharmacistService;

@RestController
@Api(value = "Pharmacist")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class PharmacistController {
	
	@Autowired
	private PharmacistService pharmacistService;
	
	
	@GetMapping(value = "/pharmacists")
	@ApiOperation(value = "Get pharmacist list", notes = "Returns list of all pharmacists")
	public List<Pharmacist> getPharmacists(@ApiParam(value = "Search pharmacist")
									@RequestParam(value = "search", required = false) String search ){
		return pharmacistService.getPharmacists(search);
	}
	
	@GetMapping(value = "/pharmacists/{id}")
	@ApiOperation(value = "Get pharmacist", notes = "Returns a single pharmacist")
	public User getPharmacist(@PathVariable String id) {
		return pharmacistService.getPharmacist(id);
	}
	
	@PostMapping(value = "admin/pharmacists/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create pharmacists", notes = "Creates pharmacist")
	public void createPharmacist(@RequestBody CreatePharmacistCmd cmd) {
		pharmacistService.createPharmacist(cmd);
	}
	
	@PutMapping(value = "/pharmacists/{id}")
	@ApiOperation(value = "Update pharmacist", notes = "Updates pharmacist details")
	public void updatePharmacist(@RequestBody CreatePharmacistCmd cmd, @PathVariable String id) {
		pharmacistService.updatePharmacist(cmd, id);
	}
	
	@DeleteMapping(value = "/pharmacists/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete pharmacist", notes = "Removes pharmacist")
	public void deletePharmacist(@PathVariable String id) {
		pharmacistService.deletePharmacist(id);
	}
}

