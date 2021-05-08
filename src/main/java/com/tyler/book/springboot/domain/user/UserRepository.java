package com.tyler.book.springboot.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email); // 소셜 로그인 반환 중 email이 이미 생선된 사용자인지 처음 가입인지 판단
}
