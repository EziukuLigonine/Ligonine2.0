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
import lt.akademija.Model.CreatePrescriptionCmd;
import lt.akademija.Model.Prescription;
import lt.akademija.Service.PrescriptionService;

@RestController
@Api(value = "Prescription")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class PrescriptionController {
	
	@Autowired
	private PrescriptionService prescriptionService;
	
	
	@GetMapping(value = "/prescriptions")
	@ApiOperation(value = "Get prescription list", notes = "Returns list of all prescriptions")
	public List<Prescription> getPrescriptions(@ApiParam(value = "Search prescription")
									@RequestParam(value = "search", required = false) String search ){
		return prescriptionService.getPrescriptions(search);
	}
	
	@GetMapping(value = "/prescriptions/{id}")
	@ApiOperation(value = "Get prescription", notes = "Returns a single prescription")
	public Prescription getPrescription(@PathVariable String id) {
		return prescriptionService.getPrescription(id);
	}
	
	@PostMapping(value = "admin/prescriptions/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create prescriptions", notes = "Creates prescription")
	public void createPrescription(@RequestBody CreatePrescriptionCmd cmd) {
		prescriptionService.createPrescription(cmd);
	}
	
	@PutMapping(value = "/prescriptions/{id}")
	@ApiOperation(value = "Update prescription", notes = "Updates prescription details")
	public void updatePrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable String id) {
		prescriptionService.updatePrescription(cmd, id);
	}
	
	@DeleteMapping(value = "/prescriptions/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete prescription", notes = "Removes prescription")
	public void deletePrescription(@PathVariable String id) {
		prescriptionService.deletePrescription(id);
	}
}


