package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateRecordCmd;
import lt.akademija.Model.Record;
import lt.akademija.Repository.RecordRepository;

@Service

public class RecordService {
	
	@Autowired
	private RecordRepository recordRepository;

	
	@Transactional
	public List<Record> getRecords(String search){
		return search == null ? recordRepository.findAll() : recordRepository.findByPersonalId(search); //pagal ak
	}
	
	@Transactional
	public Record getRecord(@PathVariable String id) {
		return recordRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public void createRecord(@RequestBody CreateRecordCmd cmd) {
		Record record = new Record();
		record.setPersonalId(cmd.getPersonalId());
		record.setDuration(cmd.getDuration());
		record.setTlk(cmd.getTlk());
		record.setAppDesc(cmd.getAppDesc());
		record.setVlk(cmd.getVlk());
		record.setRepeated(cmd.getRepeated());
		record.setDoctorUsername(cmd.getDoctorUsername());
		record.setDate(cmd.getDate());
		recordRepository.save(record);
	}
	
	@Transactional 
	public void updateRecord(@RequestBody CreateRecordCmd cmd, @PathVariable String id) {
		Record record = recordRepository.getOne(Long.parseLong(id));
		if(record != null) {
			BeanUtils.copyProperties(cmd, record);
			recordRepository.save(record);
		}
	}
	
	@Transactional
	public void deleteRecord(@PathVariable String id) {
		recordRepository.delete(Long.parseLong(id));
	}

}
