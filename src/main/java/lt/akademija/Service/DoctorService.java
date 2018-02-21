package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.Doctor;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Repository.DoctorRepository;
import lt.akademija.Repository.PatientRepository;
import lt.akademija.Repository.PrescriptionRepository;
import lt.akademija.Repository.RecordRepository;
import lt.akademija.Repository.UserRepository;

@Service

public class DoctorService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;

	
	@Transactional
	public List<Doctor> getDoctors(String search){
		return search == null ? doctorRepository.findAll() : doctorRepository.findByUsername(search); //reikia filtruoti tik aktarus. 
	}
	
	@Transactional
	public User getDoctor(@PathVariable String id) {
		return userRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public List<Patient> getDoctorPatients(@PathVariable String id) {
		return patientRepository.findByDoctorUsername(doctorRepository.getOne(Long.parseLong(id)).getUsername());
	}
	
	@Transactional 
	public List<Record> getDoctorRecords(@PathVariable String id) {
		return recordRepository.findByDoctorUsername(doctorRepository.getOne(Long.parseLong(id)).getUsername());
	}
	
	@Transactional
	public List<Prescription> getDoctorPrescriptions(@PathVariable String id) {
		return prescriptionRepository.findByDoctorUsername(doctorRepository.getOne(Long.parseLong(id)).getUsername());
	}
	
	@Transactional
	public void createDoctor(@RequestBody CreateDoctorCmd cmd) {
		User doctor = new Doctor();
		doctor.setName(cmd.getName());
		doctor.setSurname(cmd.getSurname());
		doctor.setUsername(cmd.getUsername());
		doctor.setPassword(cmd.getPassword());
		doctor.setSpecialisation(cmd.getSpecialisation());
		userRepository.save(doctor);
	}
	
	@Transactional 
	public void updateDoctor(@RequestBody CreateDoctorCmd cmd, @PathVariable String id) {
		User doctor = userRepository.getOne(Long.parseLong(id));
		if(doctor != null) {
			BeanUtils.copyProperties(cmd, doctor);
			userRepository.save(doctor);
		}
	}
	
	@Transactional
	public void deleteDoctor(@PathVariable String id) {
		userRepository.delete(Long.parseLong(id));
	}

}