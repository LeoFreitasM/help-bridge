package com.helpbridge.repositories;

import com.helpbridge.model.Calls;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CallsRepository extends JpaRepository<Calls, Long> {

    Calls findByTitle(String title);

}
