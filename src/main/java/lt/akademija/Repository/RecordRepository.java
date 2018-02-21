package lt.akademija.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.akademija.Model.Record;

public interface RecordRepository  extends JpaRepository<Record, Long> {
	
	List<Record> findByPersonalId(String search);
	List<Record> findByDoctorUsername(String search);
	

}
