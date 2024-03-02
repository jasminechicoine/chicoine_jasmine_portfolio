-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;

-- Use the database
USE portfolio_db;

-- Table for projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for project categories (optional)
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table for project tags (optional)
CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table for project-category relationship (optional)
CREATE TABLE project_categories (
    project_id INT,
    category_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    PRIMARY KEY (project_id, category_id)
);

-- Table for project-tag relationship (optional)
CREATE TABLE project_tags (
    project_id INT,
    tag_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id),
    PRIMARY KEY (project_id, tag_id)
);