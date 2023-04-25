import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'

export default function Navbar(props: any) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <h4 className="app-title">{props.title}</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                {props.aboutText}
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                // className="nav-link dropdown-toggle"
                href="/services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.servicesText}
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="">
                    {props.serviceOne}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="">
                    {props.serviceTwo}
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="">
                    {props.moreServices}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                {props.contactText}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/blog/[blog_slug].tsx">
                {props.blogText}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/gallery">
                {props.galleryText}
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Navbar Object - PropTypes:
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  servicesText: PropTypes.string.isRequired,
  serviceOne: PropTypes.string.isRequired,
  serviceTwo: PropTypes.string.isRequired,
  moreServices: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  blogText: PropTypes.string.isRequired,
  galleryText: PropTypes.string.isRequired,
};

// Default Porp Values:
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about here",
};
