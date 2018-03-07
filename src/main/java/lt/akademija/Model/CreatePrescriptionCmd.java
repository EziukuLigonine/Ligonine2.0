package lt.akademija.Model;

public class CreatePrescriptionCmd {

	private Long id;
	private String personalId; // asmens kodas reik su pacientu sujungt
	private String activeMat; // veiklioji medziaga
	private String activeMatQuantity; // veikliosios medziagos kiekis
	private String unit; // matavimo vienetai
	private String desc; // vartojimo aprasas
	private String validUntil;
	private String timestamp;
	private boolean sold = false;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isSold() {
		return sold;
	}

	public void setSold(boolean sold) {
		this.sold = sold;
	}

	public String getPersonalId() {
		return personalId;
	}

	public void setPersonalId(String personalId) {
		this.personalId = personalId;
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

	public String getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(String validUntil) {
		this.validUntil = validUntil;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

}
