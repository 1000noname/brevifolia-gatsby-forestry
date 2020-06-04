import React from "react"
import Helmet from "react-helmet"
import Hero from "./Hero"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "../styles/components/layout.module.scss"
import "../styles/style.scss"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <section
      className={`${layoutStyles.layout} ${props.page === "info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Hero />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  )
}
