import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LikertButtons from "./LikertButtons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const Survey = () => {
  const classes = useStyles();
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Survey", path: "/Survey" },
            { name: "questionnaire" },
          ]}
        />
      </div>
      <SimpleCard
        style={{ textTransform: "none" }}
        title="Given the chance, you prefer to dontate your time to a charitable organzation or non-profit entity."
      >
        <LikertButtons questionId="q-1" />
      </SimpleCard>
      <SimpleCard title="Given the chance, you prefer to donate your money to a chartiable organzation or non-profit entity.">
        <LikertButtons questionId="q-2" />
      </SimpleCard>
      <SimpleCard title="You favor local charities, rather than national or multi-national organizations.">
        <LikertButtons questionId="q-3" />
      </SimpleCard>
      <SimpleCard title="You have a passion for helping those less fortunate than you.">
        <LikertButtons questionId="q-4" />
      </SimpleCard>
      <SimpleCard title="You have a desire to work with food banks or meal kitchens.">
        <LikertButtons questionId="q-5" />
      </SimpleCard>
      <SimpleCard title="You have always wanted to volunteer at a local hospital.">
        <LikertButtons questionId="q-6" />
      </SimpleCard>
      <SimpleCard title="You greatly appreciate your educational opportunities, and would like to ensure others can get the same quality of education.">
        <LikertButtons questionId="q-7" />
      </SimpleCard>
      <SimpleCard title="You have always wanted to improve equality, regardless of gender identities.">
        <LikertButtons questionId="q-8" />
      </SimpleCard>
      <SimpleCard title="You want to ensure the availability of clean water and sanitation for everyone.">
        <LikertButtons questionId="q-9" />
      </SimpleCard>
      <SimpleCard title="You want to help provide access to clean, afforable and renewable energy for all.">
        <LikertButtons questionId="q-10" />
      </SimpleCard>
      <SimpleCard title="Bringing in jobs for everyone to bolster the economy is something you often think about.">
        <LikertButtons questionId="q-11" />
      </SimpleCard>
      <SimpleCard title="You want to help strengthen the infrastructure and foster an inclusive innovation environment.">
        <LikertButtons questionId="q-12" />
      </SimpleCard>
      <SimpleCard title="You would like to reduce inequalities, regardless of race, religion, or socio-economic status.">
        <LikertButtons questionId="q-13" />
      </SimpleCard>
      <SimpleCard title="You would like to help build strong sustainable communities.">
        <LikertButtons questionId="q-14" />
      </SimpleCard>
      <SimpleCard title="You have wanted to help reduce waste and promote responsible consumption of products.">
        <LikertButtons questionId="q-15" />
      </SimpleCard>
      <SimpleCard title="You have noticed that the call to action for climate change has fallen short of your expectations and want to do more.">
        <LikertButtons questionId="q-16" />
      </SimpleCard>
      <SimpleCard title="You are often concerned about ocean life and want to help reduce our negative impacts on the ocean.">
        <LikertButtons questionId="q-17" />
      </SimpleCard>
      <SimpleCard title="You are often concerned about life on land and want to help reduce our negative impacts on the affected ecosystems.">
        <LikertButtons questionId="q-18" />
      </SimpleCard>
      <SimpleCard title="You want to help improve peace and social justice, at all levels, locally or around the world.">
        <LikertButtons questionId="q-19" />
      </SimpleCard>
      <SimpleCard title="You want to get involved with each of the implimentations of the Sustainable Development Goals.">
        <LikertButtons questionId="q-20" />
      </SimpleCard>
    </div>
  );
};

export default Survey;
