package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.Admin;
import lt.akademija.Model.CreateAdminCmd;
import lt.akademija.Model.User;
import lt.akademija.Repository.AdminRepository;

@Service

public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Transactional
	public List<Admin> getAdmins() {
		return adminRepository.findAll();
																									// tik aktarus.
	}

	@Transactional
	public User getAdmin(@PathVariable Long id) {
		return adminRepository.findOne(id);
	}

	@Transactional
	public void createAdmin(@RequestBody CreateAdminCmd cmd) {
		Admin admin = new Admin();
		admin.setName(cmd.getName());
		admin.setSurname(cmd.getSurname());
		admin.setUsername(cmd.getUsername());
		admin.setPassword(passwordEncoder.encode(cmd.getPassword()));
		admin.setRole("Admin");
		adminRepository.save(admin);
	}

	@Transactional
	public void updateAdmin(@RequestBody CreateAdminCmd cmd, @PathVariable Long id) {
		Admin newAdmin = adminRepository.findOne(id);
		newAdmin.setName(cmd.getName());
		newAdmin.setSurname(cmd.getSurname());
		newAdmin.setUsername(cmd.getUsername());
		adminRepository.save(newAdmin);
	}

}