// Package datetimegroup implements the Azure ARM Datetimegroup service API
// version 1.0.0.
// 
// Test Infrastructure for AutoRest
package datetimegroup

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

import (
    "github.com/Azure/go-autorest/autorest"
)

const (
    // APIVersion is the version of the Datetimegroup
    APIVersion = "1.0.0"

    // DefaultBaseURI is the default URI used for the service Datetimegroup
    DefaultBaseURI = "https://localhost"
)

// ManagementClient is the base client for Datetimegroup.
type ManagementClient struct {
    autorest.Client
    BaseURI string
    APIVersion string
}

// New creates an instance of the ManagementClient client.
func New() ManagementClient {
    return NewWithBaseURI(DefaultBaseURI, )
}

// NewWithBaseURI creates an instance of the ManagementClient client.
func NewWithBaseURI(baseURI string, ) ManagementClient {
   return ManagementClient{
        Client: autorest.NewClientWithUserAgent(UserAgent()),
        BaseURI: baseURI,
        APIVersion: APIVersion,
    }
}

