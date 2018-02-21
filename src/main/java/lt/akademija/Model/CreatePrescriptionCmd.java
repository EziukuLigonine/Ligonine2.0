package lt.akademija.Model;

public class CreatePrescriptionCmd {
	
	private String personalId; // asmens kodas reik su pacientu sujungt
    private String date; // israsymo data
    private String activeMat; // veiklioji medziaga
    private String activeMatQuantity; // veikliosios medziagos kiekis
    private String unit; // matavimo vienetai
    private String desc; // vartojimo aprasas
    private String doctorUsername; // israsiusio daktaro username. reikia su daktaru sujungt
    private String validUntil;
    
	public String getPersonalId() {
		return personalId;
	}
	public void setPersonalId(String personalId) {
		this.personalId = personalId;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getActiveMat() {
		return activeMat;
	}
	public void setActiveMat(String activeMat) {
		this.activeMat = activeMat;
	}
	public String getActiveMatQuantity() {
		return activeMatQuantity;
	}
	public void setActiveMatQuantity(String activeMatQuantity) {
		this.activeMatQuantity = activeMatQuantity;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getDoctorUsername() {
		return doctorUsername;
	}
	public void setDoctorUsername(String doctorUsername) {
		this.doctorUsername = doctorUsername;
	}
	public String getValidUntil() {
		return validUntil;
	}
	public void setValidUntil(String validUntil) {
		this.validUntil = validUntil;
	}
    
    

}
