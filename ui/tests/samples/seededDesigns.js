
    // This file is auto-generated by seedResources.setup.js
    // Do not edit this file manually
    export const Designs = {
  "Datadog seed content": {
    "id": "164f8e26-bb74-4e4e-8825-9a591b983e61",
    "name": "Datadog seed content",
    "pattern_file": "name: Datadog agent on k8's\nversion: 0.0.1\nservices:\n  NodeGroupInventoryWallet:\n    annotations: {}\n    apiVersion: core.meshery.io/v1alpha1\n    dependsOn:\n    - datadog-agent\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: meshery-core\n    name: NodeGroupInventoryWallet\n    namespace: \"\"\n    settings: {}\n    traits:\n      meshmap:\n        edges: []\n        id: 841cef26-db29-43a5-8906-8a01543263d6\n        label: NodeGroupInventoryWallet\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: []\n          displayName: Meshery Core\n          hostID: 00000000-0000-0000-0000-000000000000\n          id: 5400b823-94ee-543c-8877-4ca3e299fcc4\n          metadata:\n            isAnnotation: false\n            published: true\n            subCategory: App Definition and Development\n            svgColor: ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg\n            svgComplete: \"\"\n            svgWhite: ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg\n          name: meshery-core\n          relationships: []\n          status: registered\n          version: 0.7.1\n        meshmodel-metadata:\n          capabilities: '{\"designer\":{\"edit\":{\"config\":false,\"lock\":true,\"shape\":{\"convert-shape\":false},\"style\":false},\"label\":{\"edit\":true,\"show\":false,\"sync-with-config-property\":\"label\"}}}'\n          defaultData: '{\"label\":\"\"}'\n          genealogy: parent\n          hasInvalidSchema: true\n          isAnnotation: true\n          primaryColor: '#00B39F'\n          published: true\n          secondaryColor: '#00D3A9'\n          shape: round-rectangle\n          shapePolygonPoints: \"\"\n          styleOverrides:\n            background-image: none\n            background-opacity: 0.1\n            border-style: dashed\n            border-width: 0\n            data:\n              label: \"\"\n            height: 30px\n            width: 30px\n            z-index: 4\n          styles: '{\"height\":\"30px\",\"width\":\"30px\", \"background-image\":\"none\",\"border-width\":1,\"border-style\":\"dashed\",\"background-opacity\":0.1}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/meshery-core/color/anchornode-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/meshery-core/white/anchornode-white.svg\n        parent: 92ca2d36-aed9-48d5-80b3-8b54249a212f\n        position:\n          posX: 56.022612875071225\n          posY: 5.623531896747492\n        whiteboardData: {}\n    type: NodeGroupInventoryWallet\n    version: 0.7.1\n  datadog-agent:\n    annotations: {}\n    apiVersion: apps/v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels:\n      app: datadog\n    model: kubernetes\n    name: datadog-agent\n    namespace: default\n    settings:\n      spec:\n        replicas: 1\n        selector:\n          match Labels:\n            app: datadog\n        template:\n          metadata:\n            labels:\n              app: datadog\n          spec:\n            containers:\n            - env:\n              - name: DD_API_KEY\n                value: <YOUR_DATADOG_API_KEY>\n              image: datadog/agent:latest\n              name: datadog-agent\n              volume Mounts:\n              - mount Path: /etc/datadog-agent\n                name: datadog-agent-config\n            volumes:\n            - config Map:\n                name: datadog-agent-config\n              name: datadog-agent-config\n    traits:\n      meshmap:\n        edges: []\n        id: 92ca2d36-aed9-48d5-80b3-8b54249a212f\n        meshmodel-metadata:\n          capabilities: |2-\n             {\n              \"designer\": {\n                \"edit\": {\n                  \"shape\": {\n                    \"convert-shape\": false\n                  }\n                }\n              }\n            }\n          defaultData: \"\"\n          genealogy: parent\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: true\n          logoURL: Created by Meshery Authors\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          published: true\n          secondaryColor: '#7aa1f0'\n          shape: round-pentagon\n          shapePolygonPoints: \"\"\n          styleOverrides: '{\"border-width\":2,\"background-opacity\":0.5}'\n          styles: '{\"border-width\":2,\"background-opacity\":0.5}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/deployment-color.svg\n          svgComplete: ui/public/static/img/meshmodels/kubernetes/complete/deployment-complete.svg\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/deployment-white.svg\n        position:\n          posX: 56.02261287507122\n          posY: 5.623531896747493\n        whiteboardData:\n          style: {}\n    type: Deployment\n    version: \"\"\n  datadog-agent-service:\n    annotations: {}\n    apiVersion: v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: datadog-agent-service\n    namespace: default\n    settings:\n      spec:\n        ports:\n        - name: udp-metrics\n          port: 8125\n          protocol: UDP\n          target Port: 8125\n        - name: dogstatsd\n          port: 8126\n          protocol: UDP\n          target Port: 8126\n        - name: trace-agent\n          port: 8127\n          protocol: TCP\n          target Port: 8127\n        - name: apm-http\n          port: 8128\n          protocol: TCP\n          target Port: 8128\n        - name: apm-statsd\n          port: 8129\n          protocol: UDP\n          target Port: 8129\n        selector:\n          app: datadog\n    traits:\n      meshmap:\n        edges: []\n        id: 93346e3b-7fcb-4a3b-ba54-4dadefde0f00\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: true\n          logoURL: https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          published: true\n          secondaryColor: '#7aa1f0'\n          shape: round-triangle\n          shapePolygonPoints: \"\"\n          styleOverrides:\n            background-position-y: 4.5\n            height: 20\n            padding: 12\n            width: 20\n            x: 10px\n            \"y\": 12px\n            z-index: 3\n          styles: '{\"height\":20,\"width\":20,\"padding\":12,\"background-position-y\":4.5,\"x\":\"10px\",\"y\":\"12px\"}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/service-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/service-white.svg\n        position:\n          posX: -23\n          posY: 0\n        whiteboardData:\n          style: {}\n    type: Service\n    version: \"\"\n",
    "user_id": "2e246a4a-11e3-4b99-8c79-e42f8565e4be",
    "location": {},
    "visibility": "public",
    "catalog_data": {
      "published_version": "",
      "compatibility": null,
      "pattern_caveats": "",
      "pattern_info": "",
      "type": ""
    },
    "type": {
      "String": "Design",
      "Valid": true
    },
    "source_content": null,
    "updated_at": "2024-08-09T08:15:42.928493Z",
    "created_at": "2024-08-09T08:15:42.928491Z",
    "view_count": 0,
    "share_count": 0,
    "download_count": 0,
    "clone_count": 0,
    "deployment_count": 0,
    "expectations": {
      "noOfComponents": 2,
      "noOfConfigurableComponents": 2,
      "noOfAnnotations": 0,
      "noOfComponentsWithValidationIssues": 0
    }
  },
  "Design With Validation Errors": {
    "id": "59b38ab1-7a64-458c-8541-e8dd55010512",
    "name": "Design With Validation Errors",
    "pattern_file": "name: 'Design With Validation Errors '\nversion: 0.0.1\nservices:\n  Section:\n    annotations: {}\n    apiVersion: core.meshery.io/v1alpha1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: meshery-shapes\n    name: Section\n    namespace: \"\"\n    settings: {}\n    traits:\n      meshmap:\n        edges: []\n        id: 446cdb32-2b4c-4233-b9a1-1bfbdf00f0c3\n        label: Section\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Meshery Shapes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: 0499d935-67ae-5f79-a806-7865387c1488\n          metadata:\n            isAnnotation: true\n            subCategory: App Definition and Development\n            svgColor: ui/public/static/img/meshmodels/meshery-shapes/color/meshery-shapes-color.svg\n            svgComplete: \"\"\n            svgWhite: ui/public/static/img/meshmodels/meshery-shapes/white/meshery-shapes-white.svg\n          model:\n            version: 0.7.1\n          name: meshery-shapes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: App Definition and Development\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: '{\"designer\":{\"show-node-group-badge\":false, \"edit\":{\"config\":false,\n            \"text\":false,\"lock\":true,\"shape\":{\"convert-shape\":false},\"style\":true},\"label\":{\"edit\":true,\"show\":true,\"sync-with-config-property\":\"label\"}}}'\n          defaultData: '{\"label\":\"\"}'\n          genealogy: parent\n          hasInvalidSchema: true\n          isAnnotation: true\n          primaryColor: '#00B39F'\n          secondaryColor: '#00D3A9'\n          shape: rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            background-image: none\n            background-opacity: 0.1\n            border-style: dashed\n            border-width: 1\n            data:\n              label: \"\"\n            height: 30px\n            width: 30px\n            z-index: 16\n          styles: '{\"height\":\"30px\",\"width\":\"30px\", \"background-image\":\"none\",\"border-width\":1,\"border-style\":\"dashed\",\"background-opacity\":0.1}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/meshery-core/color/anchornode-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/meshery-core/white/anchornode-white.svg\n        position:\n          posX: 530\n          posY: 99\n        whiteboardData: {}\n    type: Section\n    version: 0.7.1\n  cluster-role-binding-id:\n    annotations: {}\n    apiVersion: rbac.authorization.k8s.io/v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: cluster-role-binding-id\n    namespace: \"\"\n    settings:\n      role Ref: {}\n      subjects: []\n    traits:\n      meshmap:\n        edges: []\n        id: 21a4b68c-ee96-47e5-bc73-567997325110\n        label: Cluster Role Binding\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: false\n          logoURL: Created by Meshery Authors\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: round-rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            height: 25px\n            width: 25px\n            x: \"7\"\n            \"y\": \"7\"\n            z-index: 18\n          styles: '{\"height\":\"25px\",\"width\":\"25px\",\"x\":\"7\", \"y\":\"7\"}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/clusterrolebinding-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/clusterrolebinding-white.svg\n        position:\n          posX: -30\n          posY: 70\n        whiteboardData: {}\n    type: ClusterRoleBinding\n    version: v1.25.2\n  cluster-role-binding-ly:\n    annotations: {}\n    apiVersion: rbac.authorization.k8s.io/v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: cluster-role-binding-ly\n    namespace: \"\"\n    settings:\n      role Ref:\n        api Group: v1\n        kind: cluster\n        name: my-role\n      subjects: []\n    traits:\n      meshmap:\n        edges: []\n        id: 00bd312a-3705-41aa-9e1c-490dbe6265b1\n        label: Cluster Role Binding\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: false\n          logoURL: Created by Meshery Authors\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: round-rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            height: 25px\n            width: 25px\n            x: \"7\"\n            \"y\": \"7\"\n            z-index: 12\n          styles: '{\"height\":\"25px\",\"width\":\"25px\",\"x\":\"7\", \"y\":\"7\"}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/clusterrolebinding-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/clusterrolebinding-white.svg\n        position:\n          posX: 310\n          posY: 70\n        whiteboardData: {}\n    type: ClusterRoleBinding\n    version: v1.25.2\n  cluster-role-nr:\n    annotations: {}\n    apiVersion: rbac.authorization.k8s.io/v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: cluster-role-nr\n    namespace: \"\"\n    settings:\n      rules: []\n    traits:\n      meshmap:\n        edges: []\n        id: b7c3161d-d673-41f9-8f7a-771fdbb3104c\n        label: Cluster Role\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: false\n          logoURL: Created by Meshery Authors\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: round-rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            height: 22px\n            width: 22px\n            x: \"8.5\"\n            \"y\": \"7.5\"\n            z-index: 11\n          styles: '{\"height\":\"22px\", \"width\":\"22px\", \"x\":\"8.5\", \"y\":\"7.5\"}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/clusterrole-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/clusterrole-white.svg\n        position:\n          posX: 210\n          posY: 170\n        whiteboardData: {}\n    type: ClusterRole\n    version: v1.25.2\n  comment-lg:\n    annotations: {}\n    apiVersion: core.meshery.io/v1alpha1\n    dependsOn:\n    - Section\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: meshery-core\n    name: comment-lg\n    namespace: default\n    settings:\n      user Messages: []\n    traits:\n      meshmap:\n        edges: []\n        id: 260805b5-3f0e-4ee7-ab79-1a66a6854b83\n        label: Comment\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Meshery Core\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: 3e2db384-d3af-5fac-8af2-684fc3c29446\n          metadata:\n            isAnnotation: false\n            subCategory: App Definition and Development\n            svgColor: ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg\n            svgComplete: \"\"\n            svgWhite: ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg\n          model:\n            version: 0.7.1\n          name: meshery-core\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: App Definition and Development\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: '{\"designer\":{\"edit\":{\"config\":true}}}'\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: true\n          primaryColor: '#FFDE00'\n          secondaryColor: '#FFDE00'\n          shape: tag\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            height: 22px\n            width: 22px\n            x: 1.5px\n            \"y\": 7.5px\n            z-index: 17\n          styles: '{\"height\":\"22px\",\"width\":\"22px\",\"x\":\"1.5px\",\"y\":\"7.5px\"}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/meshery-core/color/comment-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/meshery-core/color/comment-color.svg\n        parent: 446cdb32-2b4c-4233-b9a1-1bfbdf00f0c3\n        position:\n          posX: 530\n          posY: 90\n        whiteboardData: {}\n    type: Comment\n    version: 0.7.1\n  default:\n    annotations: {}\n    apiVersion: v1\n    dependsOn: []\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: default\n    namespace: \"\"\n    settings: {}\n    traits:\n      meshmap:\n        edges: []\n        id: d42199a2-d5cd-4224-921b-bd4643bec22d\n        label: Namespace\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: |2-\n             {\n              \"designer\": {\n                \"edit\": {\n                  \"shape\": {\n                    \"convert-shape\": false\n                  }\n                }\n              }\n            }\n          defaultData: \"\"\n          genealogy: parent\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: false\n          logoURL: https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            background-image: none\n            background-opacity: 0.5\n            border-style: dashed\n            border-width: 2\n            z-index: 14\n          styles: '{\"background-image\":\"none\",\"border-width\":2,\"border-style\":\"dashed\",\"background-opacity\":0.5}'\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/namespace-color.svg\n          svgComplete: ui/public/static/img/meshmodels/kubernetes/complete/namespace-complete.svg\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/namespace-white.svg\n        position:\n          posX: 210\n          posY: 49\n        whiteboardData: {}\n    type: Namespace\n    version: v1.25.2\n  replication-controller-jy:\n    annotations: {}\n    apiVersion: v1\n    dependsOn:\n    - default\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: replication-controller-jy\n    namespace: default\n    settings: {}\n    traits:\n      meshmap:\n        edges: []\n        id: 6da4e565-a9e1-4d9d-a6c3-c5bcb92d705d\n        label: Replication Controller\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: true\n          logoURL: https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: cut-rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            z-index: 15\n          styles: \"\"\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/replicationcontroller-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/replicationcontroller-white.svg\n        parent: d42199a2-d5cd-4224-921b-bd4643bec22d\n        position:\n          posX: 230\n          posY: 50\n        whiteboardData: {}\n    type: ReplicationController\n    version: v1.25.2\n  replication-controller-ld:\n    annotations: {}\n    apiVersion: v1\n    dependsOn:\n    - default\n    id: null\n    isAnnotation: false\n    labels: {}\n    model: kubernetes\n    name: replication-controller-ld\n    namespace: default\n    settings: {}\n    traits:\n      meshmap:\n        edges: []\n        id: 0463ce18-8cc4-4082-a5ab-8582aaed0332\n        label: Replication Controller\n        meshmodel-data:\n          category:\n            metadata: null\n            name: Orchestration & Management\n          components: null\n          description: \"\"\n          displayName: Kubernetes\n          hostID: 26e64aa8-2d86-57bd-92b3-2a73160d27b4\n          id: a5d424b9-55b1-5767-a451-a250c4098685\n          metadata:\n            isAnnotation: false\n            svgColor: ui/public/static/img/meshmodels/kubernetes/color/kubernetes-color.svg\n            svgWhite: ui/public/static/img/meshmodels/kubernetes/white/kubernetes-white.svg\n          model:\n            version: v1.25.2\n          name: kubernetes\n          registrant:\n            hostname: artifacthub\n          relationships: null\n          schemaVersion: core.meshery.io/v1beta1\n          status: enabled\n          subCategory: \"\"\n          version: v1.0.0\n        meshmodel-metadata:\n          capabilities: \"\"\n          defaultData: \"\"\n          genealogy: \"\"\n          isAnnotation: false\n          isCustomResource: false\n          isModelAnnotation: \"FALSE\"\n          isNamespaced: true\n          logoURL: https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg\n          model: kubernetes\n          modelDisplayName: Kubernetes\n          primaryColor: '#326CE5'\n          secondaryColor: '#7aa1f0'\n          shape: cut-rectangle\n          shapePolygonPoints: \"\"\n          status: enabled\n          styleOverrides:\n            z-index: 13\n          styles: \"\"\n          subCategory: \"\"\n          svgColor: ui/public/static/img/meshmodels/kubernetes/color/replicationcontroller-color.svg\n          svgComplete: \"\"\n          svgWhite: ui/public/static/img/meshmodels/kubernetes/white/replicationcontroller-white.svg\n        parent: d42199a2-d5cd-4224-921b-bd4643bec22d\n        position:\n          posX: 190\n          posY: 30\n        whiteboardData: {}\n    type: ReplicationController\n    version: v1.25.2\n",
    "user_id": "2e246a4a-11e3-4b99-8c79-e42f8565e4be",
    "location": {},
    "visibility": "public",
    "catalog_data": {
      "published_version": "",
      "compatibility": null,
      "pattern_caveats": "",
      "pattern_info": "",
      "type": ""
    },
    "type": {
      "String": "Design",
      "Valid": true
    },
    "source_content": null,
    "updated_at": "2024-08-09T08:15:43.21195Z",
    "created_at": "2024-08-09T08:15:43.211947Z",
    "view_count": 0,
    "share_count": 0,
    "download_count": 0,
    "clone_count": 0,
    "deployment_count": 0,
    "expectations": {
      "noOfComponents": 8,
      "noOfConfigurableComponents": 6,
      "noOfAnnotations": 2,
      "noOfComponentsWithValidationIssues": 1
    }
  }
};