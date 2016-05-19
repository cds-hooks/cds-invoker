# cds-invoker

[![Build Status](https://travis-ci.org/cds-hooks/cds-invoker.svg?branch=master)](https://travis-ci.org/cds-hooks/cds-invoker)
[![devDependency Status](https://david-dm.org/cds-hooks/cds-invoker.svg)](https://david-dm.org/cds-hooks/cds-invoker)

Simple nodejs server that simulates the EHR's side of a CDS Hooks interaction, for testing purposes.

## Usage
This service exposes one API call (`invoke`) that causes it to call the external CDS Service and pass through the resulting cards.

```
POST /invoke
{
  "service": "https://invoker.cds-hooks.org",
  "payload": {
    // data to call with
  }
}
```

## Deployment
This card service can be deployed with docker. By default, the Dockerfile exposes port 3000. Creating the docker container can be done by:

```bash
$ docker build -t <your-name>/cds-invoker .
Successfully built <container-id>

$ docker run -p 3000:3000 -d --rm <your-name>/cds-invoker
```
