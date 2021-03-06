export const phloApi = {
  api_id: '9144b7d6-1cee-4009-990c-af2cd02aa669',
  message: '',
  data: {
    connections: [
      {
        data: { id: '2185004a-6f90-4105-bfb7-5636c9d3a652', type: 'output' },
        source: '6f80e892-b651-46dd-9765-96d57ac79869.call',
        target: 'c383cf83-ba59-45a3-a0b7-d90690917686.Input',
      },
      {
        data: { type: 'output' },
        source: 'c383cf83-ba59-45a3-a0b7-d90690917686.completed',
        target: '7204e978-1445-4239-894d-3a56e06a1f21.Input',
      },
      {
        data: { type: 'output' },
        source: 'c383cf83-ba59-45a3-a0b7-d90690917686.timeout',
        target: '71fdfa01-cb64-4e6f-8b8f-c8b395517235.Input',
      },
      {
        data: { type: 'output' },
        source: 'c383cf83-ba59-45a3-a0b7-d90690917686.assignment_failed',
        target: 'ca5a3968-8988-450e-8500-89950fc8fb8a.Input',
      },
      {
        data: { type: 'output' },
        source: 'c383cf83-ba59-45a3-a0b7-d90690917686.1',
        target: 'a3fab770-81a6-4d1b-8bb4-dcdbd7fd6bc3.Input',
      },
      {
        data: { type: 'output' },
        source: 'c383cf83-ba59-45a3-a0b7-d90690917686.2',
        target: 'a3fab770-81a6-4d1b-8bb4-dcdbd7fd6bc3.Input',
      },
    ],
    nodes: [
      {
        class: 'component',
        color: '#3F51B5',
        component: 'prompt',
        config: {
          dynamic_states: false,
          model: [
            {
              data: { name: 'Play Audio_1' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: {
                prompt: [
                  {
                    delay: 0,
                    file: '',
                    language: 'fr-FR',
                    loops: 0,
                    prompt_speak_type: 'basic',
                    prompt_type: 'speak',
                    text: 'The call is completed. It was nice serving you.',
                    url: '',
                    voice: 'WOMAN',
                  },
                ],
              },
              inputType: 'prompt',
              key: 'prompt',
              label: '',
              type: 'prompt',
              validation: 'required',
            },
          ],
          output_states: [
            { default: true, id: 'prompt_completed', name: 'Prompt completed', selected: true },
          ],
        },
        description: 'Speak/Play audio to a user',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/prompt_9B51E0.svg',
        id: '7204e978-1445-4239-894d-3a56e06a1f21',
        input: true,
        left: -20.482526768711164,
        name: 'Play Audio_1',
        node_vars: { _component: [] },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 304.0,
        type: 'prompt',
      },
      {
        class: 'start',
        color: '#00695C',
        component: 'start',
        config: {
          dynamic_states: true,
          model: [
            {
              data: { name: 'Start' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: { triggers: ['message', 'call', 'http'] },
              inputType: 'checkbox',
              key: 'triggers',
              label: 'Triggers',
              type: 'triggers',
              validation: '',
            },
            {
              data: { events: { hangup: { method: 'POST', url: '' } } },
              inputType: 'events',
              key: 'events',
              label: 'Event Callbacks',
              type: 'events',
              validation: '',
            },
            {
              data: { payload_format: {} },
              inputType: 'checkbox',
              key: 'payload_format',
              label: '',
              type: 'payload_format',
              validation: '',
            },
            {
              data: {
                record_start: {
                  file: '',
                  language: 'en-US',
                  prompt_speak_type: 'basic',
                  prompt_type: 'speak',
                  text: 'This call is being recorded',
                  url: '',
                  voice: 'WOMAN',
                },
              },
              inputType: 'prompt',
              key: 'record_start',
              label: '',
              type: 'record_start',
              validation: 'required',
            },
            {
              data: {
                record_stop: {
                  file: '',
                  language: 'en-US',
                  prompt_speak_type: 'basic',
                  prompt_type: 'speak',
                  text: 'Call recording stopped',
                  url: '',
                  voice: 'WOMAN',
                },
              },
              inputType: 'prompt',
              key: 'record_stop',
              label: '',
              type: 'record_stop',
              validation: 'required',
            },
          ],
          output_states: [
            { default: false, id: 'message', name: 'Incoming Message', selected: true },
            { default: false, id: 'call', name: 'Incoming Call', selected: true },
            { default: false, id: 'chat', name: 'Incoming Chat', selected: true },
          ],
        },
        description: 'Flow starts executing from this node.',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/start_2CB031.svg',
        id: '6f80e892-b651-46dd-9765-96d57ac79869',
        input: false,
        left: 0.0,
        name: 'Start',
        node_vars: {
          _component: ['request_type'],
          call: [
            'uuid',
            'to',
            'from',
            'direction',
            'to_iso2',
            'from_iso2',
            'to_country',
            'from_country',
            'leg',
            'bill_rate',
            'header1',
            'header2',
            'header3',
            'header4',
            'header5',
          ],
          chat: [
            'chat_uuid',
            'from',
            'customer_user_status',
            'from_iso2',
            'from_country',
            'customer_email',
            'customer_phone',
          ],
          message: [
            'message_uuid',
            'direction',
            'status',
            'to',
            'from',
            'to_iso2',
            'from_iso2',
            'to_country',
            'from_country',
            'msg',
            'units',
            'total_rate',
            'total_amount',
            'type',
            'media_count',
            'media_urls',
            'media_url0',
            'media_url1',
            'media_url2',
            'media_url3',
            'media_url4',
            'media_url5',
            'media_url6',
            'media_url7',
            'media_url8',
            'media_url9',
          ],
        },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 0.0,
        type: 'start',
      },
      {
        class: 'component',
        color: '#3F51B5',
        component: 'prompt',
        config: {
          dynamic_states: false,
          model: [
            {
              data: { name: 'Play Audio_3' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: {
                prompt: [
                  {
                    delay: 0,
                    file: '',
                    language: 'en-US',
                    loops: 0,
                    prompt_speak_type: 'basic',
                    prompt_type: 'speak',
                    text: 'Thanks for calling. Call has timed out.',
                    url: '',
                    voice: 'WOMAN',
                  },
                ],
              },
              inputType: 'prompt',
              key: 'prompt',
              label: '',
              type: 'prompt',
              validation: 'required',
            },
          ],
          output_states: [
            { default: true, id: 'prompt_completed', name: 'Prompt completed', selected: true },
          ],
        },
        description: 'Speak/Play audio to a user',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/prompt_9B51E0.svg',
        id: '71fdfa01-cb64-4e6f-8b8f-c8b395517235',
        input: true,
        left: 181.23700223372077,
        name: 'Play Audio_3',
        node_vars: { _component: [] },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 447.0,
        type: 'prompt',
      },
      {
        class: 'component',
        color: '#3F51B5',
        component: 'prompt',
        config: {
          dynamic_states: false,
          model: [
            {
              data: { name: 'Play Audio_2' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: {
                prompt: [
                  {
                    delay: 0,
                    file: '',
                    language: 'en-US',
                    loops: 0,
                    prompt_speak_type: 'basic',
                    prompt_type: 'speak',
                    text: 'Thanks for calling. No agents found for this call.',
                    url: '',
                    voice: 'WOMAN',
                  },
                ],
              },
              inputType: 'prompt',
              key: 'prompt',
              label: '',
              type: 'prompt',
              validation: 'required',
            },
          ],
          output_states: [
            { default: true, id: 'prompt_completed', name: 'Prompt completed', selected: true },
          ],
        },
        description: 'Speak/Play audio to a user',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/prompt_9B51E0.svg',
        id: 'ca5a3968-8988-450e-8500-89950fc8fb8a',
        input: true,
        left: 405.68618795312995,
        name: 'Play Audio_2',
        node_vars: { _component: [] },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 572.0,
        type: 'prompt',
      },
      {
        class: 'component',
        color: '#3F51B5',
        component: 'prompt',
        config: {
          dynamic_states: false,
          model: [
            {
              data: { name: 'Play Audio_4' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: {
                prompt: [
                  {
                    delay: 0,
                    file: '',
                    language: 'en-US',
                    loops: 0,
                    prompt_speak_type: 'basic',
                    prompt_type: 'speak',
                    text: 'Prompt is played for key pressed {{Queue And Route_1.next_state}}',
                    url: '',
                    voice: 'WOMAN',
                  },
                ],
              },
              inputType: 'prompt',
              key: 'prompt',
              label: '',
              type: 'prompt',
              validation: 'required',
            },
          ],
          output_states: [
            { default: true, id: 'prompt_completed', name: 'Prompt completed', selected: true },
          ],
        },
        description: 'Speak/Play audio to a user',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/prompt_9B51E0.svg',
        id: 'a3fab770-81a6-4d1b-8bb4-dcdbd7fd6bc3',
        input: true,
        left: 600.0,
        name: 'Play Audio_4',
        node_vars: { _component: [] },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 422.0,
        type: 'prompt',
      },
      {
        class: 'component',
        color: '#3F51B5',
        component: 'queueandroute',
        config: {
          dynamic_states: true,
          model: [
            {
              data: { name: 'Queue And Route_1' },
              inputType: 'text',
              label: 'Name',
              type: 'text',
              validation: 'required',
            },
            {
              data: { queue: '1a0dbd05-eb3e-407b-a752-ccba42f12fd2' },
              inputType: 'queue',
              key: 'queue',
              label: 'Select Queue',
              type: 'queue',
              validation: 'required',
            },
            {
              data: [
                {
                  data: { routing_teams: ['49ceb0e7-ecd9-4fba-bd3a-9af9232ba325'] },
                  inputType: 'list',
                  key: 'routing_teams',
                  label: 'Assign To',
                  type: 'routing_teams',
                  validation: '',
                },
                {
                  data: {
                    routing_skills_filter: [
                      { operator: '>', skill: '3533bdf4-218f-4269-9a0f-b9b70b29f2b0', value: 43 },
                    ],
                  },
                  inputType: 'list',
                  key: 'routing_skills_filter',
                  label: 'Skill Filters',
                  type: 'routing_skills_filter',
                  validation: '',
                },
              ],
              inputType: 'routing_team_manager',
              label: '',
              tab: null,
              type: 'routing_team_manager',
              validation: '',
            },
            {
              data: { routing: 'Availability' },
              inputType: 'routing',
              key: 'routing',
              label: 'Routing Strategy',
              type: 'routing',
              validation: 'required',
            },
            {
              data: { agent_limit: 1 },
              inputType: 'text',
              key: 'agent_limit',
              label: 'Assignment Reservation',
              type: 'agent_limit',
              validation: 'required',
            },
            {
              data: { retry_limit: 0 },
              inputType: 'retry_limit',
              key: 'retry_limit',
              label: 'Assignment Retry',
              tab: null,
              type: 'retry_limit',
              validation: 'required',
            },
          ],
          output_states: [
            { default: true, id: 'completed', name: 'Completed', selected: true },
            { default: true, id: 'enqueue_failed', name: 'Enqueue Failed', selected: true },
            { default: true, id: 'timeout', name: 'Wait Timeout', selected: true },
            { default: true, id: 'assignment_failed', name: 'Assignment Failed', selected: true },
            { default: false, id: '1', name: '1', selected: true },
            { default: false, id: '2', name: '2', selected: true },
            { default: false, id: '3', name: '3', selected: false },
            { default: false, id: '4', name: '4', selected: false },
            { default: false, id: '5', name: '5', selected: false },
            { default: false, id: '6', name: '6', selected: false },
            { default: false, id: '7', name: '7', selected: false },
            { default: false, id: '8', name: '8', selected: false },
            { default: false, id: '9', name: '9', selected: false },
            { default: false, id: '#', name: '#', selected: false },
            { default: false, id: '0', name: '0', selected: false },
            { default: false, id: '*', name: '*', selected: false },
          ],
        },
        description: 'Create/Manage call enqueue and dequeue.',
        error: {
          errorClass: '',
          errorMessage: '',
          errorShowClass: '',
          errorTextClass: '',
          errors: {},
          isSaveErrored: false,
        },
        icon: 'https://d2wsqfbujo4jlg.cloudfront.net/component_icons/queue_and_route_9B51E0.svg',
        id: 'c383cf83-ba59-45a3-a0b7-d90690917686',
        input: true,
        left: 141.0,
        name: 'Queue And Route_1',
        node_vars: { _component: ['next_state'] },
        phlo_id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
        summary: { isShownClass: 'none', text: '' },
        tip: { title: 'Drag and Drop nodes' },
        top: 167.0,
        type: 'queue_and_route',
      },
    ],
    phlo: {
      created_at: 1630913273,
      description: '',
      enabled: false,
      group: 'public',
      id: '7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
      name: 'Copy of QNR TEST VISHESH with skill filters',
      public: false,
      redact: false,
      updated_at: 1636544533,
      url: 'https://runner-service.contactodev.com/v1/account/MANZLMYMJIMDNMNJA1OD/phlo/7fe0e08c-0a06-47b3-81dd-03e20d678f1e',
      version: 1,
      numbers: [],
      applications: [],
    },
  },
  errors: null,
}
