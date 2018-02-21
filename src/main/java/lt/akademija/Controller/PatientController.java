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
import lt.akademija.Model.CreatePatientCmd;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Service.PatientService;

@RestController
@Api(value = "Patient")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	
	@GetMapping(value = "/patients")
	@ApiOperation(value = "Get patient list", notes = "Returns list of all patients")
	public List<Patient> getPatients(@ApiParam(value = "Search patient")
									@RequestParam(value = "search", required = false) String search ){
		return patientService.getPatients(search);
	}
	
	@GetMapping(value = "/patients/{id}")
	@ApiOperation(value = "Get patient", notes = "Returns a single patient")
	public User getPatient(@PathVariable String id) {
		return patientService.getPatient(id);
	}
	
	@GetMapping(value = "/patients/{id}/records")
	@ApiOperation(value = "Get patient records", notes = "Returns list of patient records")
	public List <Record> getPatientRecords(@PathVariable String id) {
		return patientService.getPatientRecords(id);
	}
	
	@GetMapping(value = "/patients/{id}/prescriptions")
	@ApiOperation(value = "Get patient prescriptions", notes = "Returns list of patient prescriptions")
	public List<Prescription> getPatientPrescriptions(@PathVariable String id) {
		return patientService.getPatientPrescriptions(id);
	}
	
	
	@PostMapping(value = "admin/patients/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create patients", notes = "Creates patient")
	public void createPatient(@RequestBody CreatePatientCmd cmd) {
		patientService.createPatient(cmd);
	}
	
	@PutMapping(value = "/patients/{id}")
	@ApiOperation(value = "Update patient", notes = "Updates patient details")
	public void updatePatient(@RequestBody CreatePatientCmd cmd, @PathVariable String id) {
		patientService.updatePatient(cmd, id);
	}
	
	@DeleteMapping(value = "/patients/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete patient", notes = "Removes patient")
	public void deletePatient(@PathVariable String id) {
		patientService.deletePatient(id);
	}
}