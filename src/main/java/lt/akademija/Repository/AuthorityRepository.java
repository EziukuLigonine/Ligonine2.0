package lt.akademija.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.akademija.Model.Authority;


public interface AuthorityRepository  extends JpaRepository <Authority, Long> {

}
