package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreatePharmacistCmd;
import lt.akademija.Model.Pharmacist;
import lt.akademija.Model.User;
import lt.akademija.Repository.PharmacistRepository;
import lt.akademija.Repository.UserRepository;

@Service

public class PharmacistService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PharmacistRepository pharmacistRepository;

	
	@Transactional
	public List<Pharmacist> getPharmacists(String search){
		return search == null ? pharmacistRepository.findAll() : pharmacistRepository.findByUsername(search); //reikia filtruoti tik aktarus. 
	}
	
	@Transactional
	public User getPharmacist(@PathVariable String id) {
		return userRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public void createPharmacist(@RequestBody CreatePharmacistCmd cmd) {
		User pharmacist = new Pharmacist();
		pharmacist.setName(cmd.getName());
		pharmacist.setSurname(cmd.getSurname());
		pharmacist.setUsername(cmd.getUsername());
		pharmacist.setPassword(cmd.getPassword());
		pharmacist.setCompanyType(cmd.getCompanyType());
		pharmacist.setCompanyName(cmd.getCompanyName());
		userRepository.save(pharmacist);
	}
	
	@Transactional 
	public void updatePharmacist(@RequestBody CreatePharmacistCmd cmd, @PathVariable String id) {
		User pharmacist = userRepository.getOne(Long.parseLong(id));
		if(pharmacist != null) {
			BeanUtils.copyProperties(cmd, pharmacist);
			userRepository.save(pharmacist);
		}
	}
	
	@Transactional
	public void deletePharmacist(@PathVariable String id) {
		userRepository.delete(Long.parseLong(id));
	}

}

