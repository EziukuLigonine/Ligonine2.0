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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.CreatePatientCmd;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Service.PatientService;
import lt.akademija.Service.UserService;

@RestController
@Api(value = "Patient")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@Autowired
	private UserService userService;

	@GetMapping(value = "/patients")
	@ApiOperation(value = "Get patient list", notes = "Returns list of all patients")
	// @PreAuthorize("hasRole('Admin') or hasRole('Doctor')")
	public List<Patient> getPatients() {
		return patientService.getPatients();
	}

	@GetMapping(value = "/patients/{id}")
	@ApiOperation(value = "Get patient", notes = "Returns a single patient")
	// @PreAuthorize("hasRole('Doctor') or hasRole('Admin') or hasRole('Patient')")
	public User getPatient(@PathVariable Long id) {
		return patientService.getPatient(id);
	}

	@GetMapping(value = "/patients/{id}/records")
	@ApiOperation(value = "Get patient records", notes = "Returns list of patient records")
	// @PreAuthorize("hasRole('Doctor') or hasRole('Admin') or hasRole('Patient')")
	public List<Record> getPatientRecords(@PathVariable Long id) {
		return patientService.getPatientRecords(id);
	}

	@GetMapping(value = "/patients/{id}/prescriptions")
	@ApiOperation(value = "Get patient prescriptions", notes = "Returns list of patient prescriptions")
	// @PreAuthorize("hasRole('Doctor') or hasRole('Admin') or hasRole('Patient')")
	public List<Prescription> getPatientPrescriptions(@PathVariable Long id) {
		return patientService.getPatientPrescriptions(id);
	}

	@GetMapping(value = "/userId")
	@ApiOperation(value = "Get user id", notes = "Returns a single users id")
	public Long getUserId() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentPrincipalName = authentication.getName();
		return userService.getUserId(currentPrincipalName);
	}

	@PostMapping(value = "admin/patients/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create patients", notes = "Creates patient")
	// @PreAuthorize("hasRole('Admin')")
	public void createPatient(@RequestBody CreatePatientCmd cmd) {
		patientService.createPatient(cmd);
	}

	@PutMapping(value = "/patients/{id}")
	@ApiOperation(value = "Update patient", notes = "Updates patient details")
	// @PreAuthorize("hasRole('Doctor') or hasRole('Admin')")
	public void updatePatient(@RequestBody CreatePatientCmd cmd, @PathVariable Long id) {
		patientService.updatePatient(cmd, id);
	}

	@PutMapping(value = "/patient/{patientId}/{doctorId}")
	@ApiOperation(value = "Assign patient to doctor", notes = "Assigns patient to doctor")
	public void assignDoctorToPatient(@PathVariable Long patientId, @PathVariable Long doctorId) {

		patientService.assignPatient(patientId, doctorId);
	}

}