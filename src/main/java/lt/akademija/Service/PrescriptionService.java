package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreatePrescriptionCmd;
import lt.akademija.Model.Prescription;
import lt.akademija.Repository.PrescriptionRepository;

@Service

public class PrescriptionService {
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;

	
	@Transactional
	public List<Prescription> getPrescriptions(String search){
		return search == null ? prescriptionRepository.findAll() : prescriptionRepository.findByPersonalId(search); //pagal ak
	}
	
	@Transactional
	public Prescription getPrescription(@PathVariable String id) {
		return prescriptionRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public void createPrescription(@RequestBody CreatePrescriptionCmd cmd) {
		Prescription prescription = new Prescription();
		prescription.setPersonalId(cmd.getPersonalId());
		prescription.setDate(cmd.getDate());
		prescription.setActiveMat(cmd.getActiveMat());
		prescription.setActiveMatQuantity(cmd.getActiveMatQuantity());
		prescription.setUnit(cmd.getUnit());
		prescription.setDesc(cmd.getDesc());
		prescription.setDoctorUsername(cmd.getDoctorUsername());
		prescription.setValidUntil(cmd.getValidUntil());
		prescriptionRepository.save(prescription);
	}
	
	@Transactional 
	public void updatePrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable String id) {
		Prescription prescription = prescriptionRepository.getOne(Long.parseLong(id));
		if(prescription != null) {
			BeanUtils.copyProperties(cmd, prescription);
			prescriptionRepository.save(prescription);
		}
	}
	
	@Transactional
	public void deletePrescription(@PathVariable String id) {
		prescriptionRepository.delete(Long.parseLong(id));
	}

}
