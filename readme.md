
# configthief

(uuApp CMD API)
- call predefined set of URIs and store the outputs from the URIs to the single location => applicable for applicationConfiguration/get (file name predefined in the configuration)
-- support binary data
- print specific configuration to the bookkit (table form)
    - list of configuration items
        - mapping of the attributes which should be displayed
        - spcified bookit location (page/section code)
        - display name
        - call command, user for authorization

(k8s)
- extract configmaps for the specified applications and
-- store the to the single location
-- upload to the bookkit page (viually - table form, store file)
- option to verify the configuration is as expected