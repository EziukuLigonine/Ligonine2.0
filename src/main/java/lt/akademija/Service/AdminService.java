package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.Admin;
import lt.akademija.Model.CreateAdminCmd;
import lt.akademija.Model.User;
import lt.akademija.Repository.AdminRepository;
import lt.akademija.Repository.UserRepository;

@Service

public class AdminService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;

	
	@Transactional
	public List<Admin> getAdmins(String search){
		return search == null ? adminRepository.findAll() : adminRepository.findByUsername(search); //reikia filtruoti tik aktarus. 
	}
	
	@Transactional
	public User getAdmin(@PathVariable String id) {
		return userRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public void createAdmin(@RequestBody CreateAdminCmd cmd) {
		User admin = new Admin();
		admin.setName(cmd.getName());
		admin.setSurname(cmd.getSurname());
		admin.setUsername(cmd.getUsername());
		admin.setPassword(cmd.getPassword());
		admin.setSpecialisation(cmd.getSpecialisation());
		userRepository.save(admin);
	}
	
	@Transactional 
	public void updateAdmin(@RequestBody CreateAdminCmd cmd, @PathVariable String id) {
		User admin = userRepository.getOne(Long.parseLong(id));
		if(admin != null) {
			BeanUtils.copyProperties(cmd, admin);
			userRepository.save(admin);
		}
	}
	
	@Transactional
	public void deleteAdmin(@PathVariable String id) {
		userRepository.delete(Long.parseLong(id));
	}

}